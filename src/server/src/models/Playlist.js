const mongoose = require('mongoose');

const { Schema } = mongoose;

const PlaylistSchema = new Schema(
    {
        title: {
            required: true,
        },
        aim: {
            id: {
                required: true,
                type: mongoose.SchemaType.Number,
            },
            title: {
                required: true,
                type: mongoose.SchemaType.String,
            },
        },
        moods: [
            {
                id: {
                    required: true,
                    type: mongoose.SchemaType.Number,
                },
                title: {
                    required: true,
                    type: mongoose.SchemaType.String,
                },
            },
        ],
        songs: [
            {
                id: {
                    required: true,
                    type: mongoose.SchemaType.Number,
                },
                title: {
                    required: true,
                    type: mongoose.SchemaType.String,
                },
            },
        ],
        date: {
            required: true,
            type: mongoose.SchemaType.Date,
        },
    },
    {
        timestamps: true,
    }
);

PlaylistSchema.index({
    createdAt: 1,
});

const Playlist = mongoose.model('Playlist', PlaylistSchema);

module.exports = Playlist;
