import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { Link } from 'react-router-dom'
import {
  Table,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap'

import Spinner from 'components/Spinner'
import TimeLeft from 'components/TimeLeft'
import {
  AUCTION_STATUS_TEXTS,
  AUCTION_STATUS_PREVIEW,
  AUCTION_STATUS_OPEN,
  AUCTION_STATUS_WAITING_FOR_PAYMENT,
  AUCTION_STATUS_WAITING_TO_SHIP,
  AUCTION_STATUS_CANCELLED,
  AUCTION_STATUS_CANCELLED_DUE_TO_NO_BIDS,
} from 'config'
import { formatDateTime } from 'utils/formatter'


class AuctionTable extends PureComponent {

  static propTypes = {
    columnList: ImmutablePropTypes.list.isRequired,
    auctionList: ImmutablePropTypes.list.isRequired,
    loadingStatus: PropTypes.number.isRequired,
    onFinish: PropTypes.func,
    onCancel: PropTypes.func,
    onDelete: PropTypes.func,
  }

  getCellValue = (auction, field) => {
    if (field === 'item_number') {
      return auction.get('pk')
    } else if (field === 'item_donor') {
      return auction.getIn(['product_details', 'donor_details', 'title'], '-')
    } else if (field === 'open_until') {
      console.log(auction.get(field))
      return <TimeLeft until={auction.get(field)} />
    } else if (field === 'status') {
      return AUCTION_STATUS_TEXTS[auction.get('status')]
    } else if (field === 'started_at') {
      return formatDateTime(auction.get(field))
    }
    return auction.get(field)
  }

  handleFinish = (id, event) => {
    event.preventDefault()

    const { onFinish } = this.props
    if (onFinish) {
      onFinish(id)
    }
  }

  handleCancel = (id, event) => {
    event.preventDefault()

    const { onCancel } = this.props
    if (onCancel) {
      onCancel(id)
    }
  }

  handleDelete = (id, event) => {
    event.preventDefault()

    const { onDelete } = this.props
    if (onDelete) {
      onDelete(id)
    }
  }

  render() {
    const { loadingStatus, columnList, auctionList } = this.props

    return (
      <div className="table-wrapper">
        {loadingStatus === 1 && <Spinner />}

        {loadingStatus === -1 && <div>
          Failed to load data.
        </div>}

        {loadingStatus === 10 && <Table striped className="data-table mb-0">
          <thead>
            <tr>
              {columnList.filter(
                column => column.get('enabled')
              ).map(column => (
                <th key={column.get('field')}>{column.get('label')}</th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {auctionList.map(auction => {
              const auctionStatus = auction.get('status')

              return (
                <tr key={auction.get('pk')}>
                  {columnList.filter(
                    column => column.get('enabled')
                  ).map(column => (
                    <td key={column.get('field')}>{this.getCellValue(auction, column.get('field'))}</td>
                  ))}
                  <td>
                    <UncontrolledDropdown>
                      <DropdownToggle size="sm" color="link" className="py-0 text-black">
                        <i className="fa fa-ellipsis-h" />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem
                          to={`/admin/auctions/${auction.get('pk')}`}
                          tag={Link}
                        >
                          Edit
                        </DropdownItem>
                        {auctionStatus === AUCTION_STATUS_PREVIEW && <DropdownItem
                          to={`/admin/auctions/${auction.get('pk')}/start`}
                          tag={Link}
                        >
                          <strong>Start</strong>
                        </DropdownItem>}
                        {auctionStatus !== AUCTION_STATUS_PREVIEW && <DropdownItem
                          to={`/admin/auctions/${auction.get('pk')}/bids`}
                          tag={Link}
                        >
                          Bids
                        </DropdownItem>}
                        {auctionStatus === AUCTION_STATUS_OPEN && <DropdownItem
                          to="/"
                          onClick={this.handleFinish.bind(this, auction.get('pk'))}
                        >
                          <strong>Finish</strong>
                        </DropdownItem>}
                        {(
                          auctionStatus === AUCTION_STATUS_OPEN ||
                          auctionStatus === AUCTION_STATUS_WAITING_FOR_PAYMENT ||
                          auctionStatus === AUCTION_STATUS_WAITING_TO_SHIP
                        ) && <DropdownItem
                          className="text-danger pr-3"
                          to="/"
                          onClick={this.handleCancel.bind(this, auction.get('pk'))}
                        >
                          Cancel
                        </DropdownItem>}
                        {(
                          auctionStatus === AUCTION_STATUS_PREVIEW ||
                          auctionStatus === AUCTION_STATUS_CANCELLED ||
                          auctionStatus === AUCTION_STATUS_CANCELLED_DUE_TO_NO_BIDS
                        ) && <DropdownItem
                          className="text-danger pr-3"
                          to="/"
                          onClick={this.handleDelete.bind(this, auction.get('pk'))}
                        >
                          Delete
                        </DropdownItem>}
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>}
      </div>
    )
  }

}

export default AuctionTable
