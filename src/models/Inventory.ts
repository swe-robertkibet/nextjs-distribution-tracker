import mongoose from 'mongoose';

const InventorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true, min: 0 },
});

export default mongoose.models.Inventory || mongoose.model('Inventory', InventorySchema);
