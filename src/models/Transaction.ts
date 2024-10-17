import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  date: { type: Date, required: true, default: Date.now },
  reseller: { type: mongoose.Schema.Types.ObjectId, ref: 'Reseller', required: true },
  item: { type: mongoose.Schema.Types.ObjectId, ref: 'Inventory', required: true },
  quantity: { type: Number, required: true, min: 1 },
  amount: { type: Number, required: true },
});

export default mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);