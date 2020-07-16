import React from 'react';
import styles from './style'

class BigBoxes extends React.Component {
    render() {
        return (
            <div
            className="bg-white sm:bg-transparent grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 sm:gap-6 shadow-lg rounded-lg p-6 sm:shadow-none sm:rounded-none sm:p-0 mb-6"
          >
            <div
              className="bg-white sm:shadow-lg sm:p-6 sm:rounded-lg flex flex-row sm:flex-col justify-between items-end sm:items-start"
            >
              <p
                className="text-base sm:text-sm text-gray-600 uppercase tracking-wider"
              >
                Income
              </p>
              <p className="text-xl sm:text-5xl text-blue-800 font-bold">$630</p>
            </div>

            <div
              className="bg-white sm:shadow-lg sm:p-6 sm:rounded-lg flex flex-row sm:flex-col justify-between items-end sm:items-start"
            >
              <p
                className="text-base sm:text-sm text-gray-600 uppercase tracking-wider"
              >
                Expenses
              </p>
              <p className="text-xl sm:text-5xl text-yellow-800 font-bold">$535</p>
            </div>
            
            <div
              className="bg-white sm:shadow-lg sm:p-6 sm:rounded-lg flex flex-row sm:flex-col justify-between items-end sm:items-start sm:col-start-1 sm:col-end-3 md:col-start-3 md:col-end-4"
            >
              <p
                className="text-base sm:text-sm text-gray-600 uppercase tracking-wider"
              >
                Cashflow
              </p>
              <p className="text-xl sm:text-5xl text-green-800 font-bold">$95</p>
            </div>
          </div>
        )
    }
}

export default BigBoxes;