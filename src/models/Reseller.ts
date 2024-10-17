import mongoose from 'mongoose';

const ResellerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  balance: { type: Number, required: true, default: 0 },
});

export default mongoose.models.Reseller || mongoose.model('Reseller', ResellerSchema);
