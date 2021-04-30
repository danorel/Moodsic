const mongoose = require('mongoose');

const { Schema } = mongoose;

const MusicloverSchema = new Schema(
    {
        email: {
            type: mongoose.SchemaTypes.String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

MusicloverSchema.index({
    createdAt: 1,
});

const Musiclover = mongoose.model('Musiclover', MusicloverSchema);

module.exports = Musiclover;
