import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

const LoanCalculator = () => {
  const [amount, setAmount] = useState(100000);
  const [months, setMonths] = useState(12);
  const [interestRate, setInterestRate] = useState(15); // Default to 15%

  const calculateEMI = () => {
    const r = interestRate / 12 / 100;
    const n = months;
    const p = amount;
    
    const emi = p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center mb-6">
        <Calculator className="h-6 w-6 text-blue-600 mr-2" />
        <h3 className="text-xl font-semibold">Loan EMI Calculator</h3>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Loan Amount (₹)
          </label>
          <input
            type="range"
            min="10000"
            max="500000"
            step="10000"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-right font-semibold mt-2">₹{amount.toLocaleString()}</div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Interest Rate (%)
          </label>
          <input
            type="range"
            min="10"
            max="20"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-right font-semibold mt-2">{interestRate}% per annum</div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Loan Term (Months)
          </label>
          <input
            type="range"
            min="3"
            max="36"
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-right font-semibold mt-2">{months} months</div>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="text-center">
            <div className="text-sm text-gray-600 mb-2">Your Monthly EMI</div>
            <div className="text-3xl font-bold text-blue-600">
              ₹{calculateEMI().toLocaleString()}
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-600">Interest Rate</div>
              <div className="font-semibold">{interestRate}% per annum</div>
            </div>
            <div>
              <div className="text-gray-600">Total Amount</div>
              <div className="font-semibold">
                ₹{(calculateEMI() * months).toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;