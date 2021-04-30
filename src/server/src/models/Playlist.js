const mongoose = require('mongoose');

const { Schema } = mongoose;

const PlaylistSchema = new Schema(
    {
        title: {
            required: true,
            type: mongoose.SchemaTypes.String,
        },
        aim: {
            id: {
                required: true,
                type: mongoose.SchemaTypes.Number,
            },
            title: {
                required: true,
                type: mongoose.SchemaTypes.String,
            },
        },
        moods: [
            {
                id: {
                    required: true,
                    type: mongoose.SchemaTypes.Number,
                },
                title: {
                    required: true,
                    type: mongoose.SchemaTypes.String,
                },
            },
        ],
        songs: [
            {
                id: {
                    required: true,
                    type: mongoose.SchemaTypes.Number,
                },
                title: {
                    required: true,
                    type: mongoose.SchemaTypes.String,
                },
            },
        ],
        date: {
            required: true,
            type: mongoose.SchemaTypes.Date,
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
