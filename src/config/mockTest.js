
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

Mock.mock('/loadParentData', {
    "name": 'lgqlee',
    "result": [5,34,767,9]
})

Mock.mock('/pm25', {
  "object|2-4": {
    "110000": "北京市",
    "120000": "天津市",
    "130000": "河北省",
    "140000": "山西省"
  }
})

// Random.paragraph()

// Mock.mock('/par', '@cparagraph')

module.exports =  Mock
