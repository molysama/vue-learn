
import Mock from 'mockjs'

Mock.mock('/user', {
    "array|1-3": [
        {
            "name|+1": [
                "Hello", "Vue", "World"
            ]
        }
    ]
})

module.exports =  Mock
