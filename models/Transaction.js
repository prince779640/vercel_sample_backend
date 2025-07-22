// models/Transaction.js
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  txnid: { type: String, required: true, unique: true },
  mihpayid: String,
  amount: { type: Number, required: true },
  productinfo: String,
  firstname: String,
  email: { type: String, required: true },
  phone: String,
  serviceDuration: {
    type: String,
    default: '1-Month'
  },
  status: { 
    type: String, 
    enum: ['initiated', 'success', 'failed', 'pending'],
    default: 'initiated'
  },
  payuMoneyId: String,
  bank_ref_num: String,
  mode: String,
  error_Message: String,
  additional_charges: Number,
  net_amount_debit: Number,
  payment_source: String,
  card_type: String,
  bankcode: String,
  udf1: String,
  udf2: String,
  udf3: String,
  udf4: String,
  udf5: String,
  verifiedAt: Date,
  rawResponse: Object
}, { 
  timestamps: true,
  strict: false // To accommodate any additional PayU fields
});

// // Indexes for faster queries
// transactionSchema.index({ txnid: 1 });
// transactionSchema.index({ email: 1 });
// transactionSchema.index({ status: 1 });
// transactionSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Transaction', transactionSchema);