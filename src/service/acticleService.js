import * as requestService from './requestService';
import config from '../config'
const urlPrefix = config.ghDomain;

export function getPhoto({page,limit}){
    var imageArr = [ 'http://hbimg.b0.upaiyun.com/6c069856192dee3a00152a5672ace81d7b668fb12b036-AzrR9k_fw320',
        'http://hbimg.b0.upaiyun.com/79968187b6d6a7463f726998015e73bc505dbb591263f8-gpyHex_fw320',
        'http://hbimg.b0.upaiyun.com/251475779c59235a0d2df60b0a42629d0fd72b30145ef6-UHdkNM_fw320',
        'http://hbimg.b0.upaiyun.com/b65a807bee513122577a786622d196e049e6db698c8c7-tMXrTP_fw320',
        'http://hbimg.b0.upaiyun.com/2e2a6cd957cfdcf8330509e075d17fc6a50b8dc639696-Vab6JH_fw320',
        'http://hbimg.b0.upaiyun.com/621357511661f78d1a681b07ca1c3ac72ccc681e10a25-FTKEVQ_fw320',
        'http://hbimg.b0.upaiyun.com/3eb47db3a2b082c2d73bce6f0bec31ffffb5296e22fed-7LkAPe_fw320',
        'http://hbimg.b0.upaiyun.com/7cd571c902d218261913a95670741cd0ca24704b30444-Aoo1gS_fw320',
        'http://hbimg.b0.upaiyun.com/dc1324bbf00ab4b59c4cc772254dd7c23bd6f68886845-tXqPI4_fw320',
        'http://hbimg.b0.upaiyun.com/bef21fb5b9d107c3cbd51a14c9e07de5ba086c231b2c0-BgznHb_fw320',
        'http://hbimg.b0.upaiyun.com/8561bbb2a43495e10c58e6fb07f0cb16cdb07ef361a997-JXBrBs_fw320',
        'http://hbimg.b0.upaiyun.com/5d36740837cc20ce03f2c772e96e65e89edf085fc013c-QFTIMn_fw320',
        'http://hbimg.b0.upaiyun.com/57531e11926f51e57c0d33af81f51a452ae06f7169fa5-HCoNou_fw320',
        'http://hbimg.b0.upaiyun.com/fedb171c98bd2241b85c60da57c8eebbde6d95e8d463a-7kWCB9_fw320',
        'http://hbimg.b0.upaiyun.com/24136b63c1b2acaa0f8c5083be47565ea9fcfd1e334c29-WKGlfK_fw320',
        'http://hbimg.b0.upaiyun.com/a2a68258bf08c8eb629d9958dfa64e1297c2ca2b5b627-gVhk3Y_fw320',
        'http://hbimg.b0.upaiyun.com/f15ef7e6fddb6254090c7d7457e255af3af72755236cf-DwBbiq_fw320',
        'http://hbimg.b0.upaiyun.com/00fc825a621f3303344a77768142a32c1a56cf1d351a3-NgiG7T_fw320',
        'http://hbimg.b0.upaiyun.com/f1a6de9fd99bbe07254006199bd70484870d09117f543-iOUgEK_fw320',
        'http://hbimg.b0.upaiyun.com/aed302e7bc72be529f3237f4f8dd700a2e0b124334630-2fnvRu_fw320' ];

    var results = [];

    for(var i = 0 ; i < imageArr.length; i++) {
        var obj = {
            _id: Date.now() + '',
            createdAt: new Date(),
            desc: 'Beijing',
            type: '福利',
            url: imageArr[i],
            who: '代码家'
        }
        results.push(obj);
    }

    return results;

    //todo remove get request
    let url = `${urlPrefix}/%E7%A6%8F%E5%88%A9/10/1`;
    console.log('get photo :', page, limit, url);

    // let url = `${urlPrefix}`;
    return requestService.get(url, true).then(data => {
        if (!data.error) {
            console.log('photos is :', data.results);
            return data.results;
            // return data.showapi_res_body.newslist
        } else {
            throw 'do getPhoto failed';
        }
    });
}
