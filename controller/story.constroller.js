import StoryModel from "../model/story.model.js";

export const uploadStory = async (req, res) => {
    try {
        let allStoryData = []
        req.files.forEach(story => {
            var storyType = ''
            if (story.mimetype == 'video/mp3') {
                storyType = 'mp3'
            } else if (story.mimetype == 'video/mp4') {
                storyType = 'mp4'
            } else if (story.mimetype == 'video/webm') {
                storyType = 'webm'
            } else if (story.mimetype == 'image/png') {
                storyType = 'png'
            } else if (story.mimetype == 'image/jpg') {
                storyType = 'jpg'
            } else if (story.mimetype == 'image/webp') {
                storyType = 'webp'
            } else if (story.mimetype == 'image/heic') {
                storyType = 'heic'
            } else if (story.mimetype == 'image/bmp') {
                storyType = 'bmp'
            }
            var storyStorege = {
                type:storyType,
                path:story.filename,
                fullpath:'localhost:3003/'+story.path
            }
            allStoryData.push(storyStorege)
        });
        req.body.story =allStoryData
        const createData = await StoryModel.create(req.body)
        res.send({
            status:true,
            msg:'story Upload',
            data:createData
        })
    } catch (error) {
        res.status(401).send({
            status: false,
            msg: 'Something wrong with request.',
            data: error
        })
    }
}