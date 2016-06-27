import * as requestService from './requestService';
import config from '../config'
const urlPrefix = config.ghDomain;
export function getPhoto({page,limit}){

    var imageArr = [
        'http://b256.photo.store.qq.com/psb?/V120IvEC4cu4h6/lbp*bIUyJXA2WOlTXvw4IqPKHqdLis**EGSy148h4tw!/b/dAABAAAAAAAA&bo=IAMsBAAAAAAFBy8!&rf=viewer_4',
        'http://b256.photo.store.qq.com/psb?/V120IvEC4cu4h6/tjbEAVPxeKozj9g7uVEYj7*3uZw0AusUonrC58KcwiY!/b/dAABAAAAAAAA&bo=OASfBcwEZAYFByg!&rf=viewer_4',
        'http://b258.photo.store.qq.com/psb?/V120IvEC4cu4h6/h.oWXVIQtk3K9x4Y2FLeOXp9t6OkmM47Jvx.GKwuIGg!/b/dAIBAAAAAAAA&bo=OASfBcwEZAYFAC8!&rf=viewer_4',
        'http://b161.photo.store.qq.com/psb?/V120IvEC4cu4h6/aNypRiYpwDYRuZggSrf03jNsOfPsfzQt6S5BbPjnJuA!/b/dKEAAAAAAAAA&bo=wAMABcADAAUFACM!&rf=viewer_4',
        'http://b254.photo.store.qq.com/psb?/V120IvEC4cu4h6/60eUvUbs0aYkKGr3nyy.Q842JMkwFst3*VRTQGLtnSc!/b/dP4AAAAAAAAA&bo=wAMABcADAAUFACM!&rf=viewer_4',
        'http://b252.photo.store.qq.com/psb?/V120IvEC4cu4h6/KoL4YNFS6plKEX4jigugZUZgyLfYamUuWThHKhxhIWQ!/b/dPwAAAAAAAAA&bo=wAMABcADAAUFACM!&rf=viewer_4',
        'http://b169.photo.store.qq.com/psb?/V120IvEC4cu4h6/uah*w3L.Y96fyyPVjNsexSZNcXoejsXc9tiNzMciaUY!/b/dKkAAAAAAAAA&bo=wAMABcADAAUFACM!&rf=viewer_4',
        'http://b167.photo.store.qq.com/psb?/V120IvEC4cu4h6/8FcZME6omfO5aSzByMCoCtkFRolAr.bnxNR4PgKqxzs!/b/dKcAAAAAAAAA&bo=OASfBcwEZAYFAC8!&rf=viewer_4',
        'http://b164.photo.store.qq.com/psb?/V120IvEC4cu4h6/5vV0Fwc8iDzT2Jzt3EKABvrXrPEdM5Uas4adjnDyqIA!/b/dKQAAAAAAAAA&bo=4AGAAuABgAIFACM!&rf=viewer_4',
        'http://b255.photo.store.qq.com/psb?/V120IvEC4cu4h6/6QY44LCVeAQayqzEysU996pD6QuMAt2nMFltxU4G2wc!/b/dP8AAAAAAAAA&bo=4AGAAuABgAIFACM!&rf=viewer_4',
        'http://b168.photo.store.qq.com/psb?/V120IvEC4cu4h6/.bn3Nc2NHNrgJlE*kMW12wxpNuoA6Q0iLiTEv8mLKrE!/b/dKgAAAAAAAAA&bo=7gLoAwAAAAAFACQ!&rf=viewer_4',
        'http://b254.photo.store.qq.com/psb?/V120IvEC4cu4h6/EL6K7Tbbrr5IWQYam4T*Eg4ZDZehfmnUgp8Dkjm5sAU!/b/dP4AAAAAAAAA&bo=7gLqAwAAAAAFACY!&rf=viewer_4',
        'http://b252.photo.store.qq.com/psb?/V120IvEC4cu4h6/kFZKiFL1SsHMaUW.iTd*Q2xOksWGkHRUsrN*0d6hxEo!/b/dPwAAAAAAAAA&bo=7gLqAwAAAAAFACY!&rf=viewer_4',
        'http://b169.photo.store.qq.com/psb?/V120IvEC4cu4h6/FpQGCy9AmDgeQdQxNtmaSzDJ*aeyQvT22QKZYOs0agY!/b/dKkAAAAAAAAA&bo=7gLqAwAAAAAFACY!&rf=viewer_4',
        'http://b165.photo.store.qq.com/psb?/V120IvEC4cu4h6/cVQ336iaUxKArRvJcB7Y*GtJB8Sqe3yCwb4DfEED10g!/b/dKUAAAAAAAAA&bo=7gLoAwAAAAAFACQ!&rf=viewer_4',
        'http://b170.photo.store.qq.com/psb?/V120IvEC4cu4h6/4VEFgiMzH.0ZJ9Qdqa5tg6x*y5JOgcfQkgtBqFYsE5s!/b/dKoAAAAAAAAA&bo=7gLqAwAAAAAFACY!&rf=viewer_4',
        'http://b162.photo.store.qq.com/psb?/V120IvEC4cu4h6/NQO2Zdq7zqzlFctlCBCNI3OKL5HkCGYzcvSq6Q4GxDY!/b/dKIAAAAAAAAA&bo=7gLqAwAAAAAFACY!&rf=viewer_4',
        'http://b169.photo.store.qq.com/psb?/V120IvEC4cu4h6/b*KIujwM4asD4P8E5DxIAhqi9yrwKYnwHii2DYgUI2I!/b/dKkAAAAAAAAA&bo=7gLqAwAAAAAFACY!&rf=viewer_4',
        'http://b252.photo.store.qq.com/psb?/V120IvEC4cu4h6/6M5zwLiPLujzKmCYq.2Oe8ox03G4IPEZIU*eCy7YPdg!/b/dPwAAAAAAAAA&bo=7gLoAwAAAAAFACQ!&rf=viewer_4',
        'http://b166.photo.store.qq.com/psb?/V120IvEC4cu4h6/bVfnbmW*Ad1AkraK5NMOb0YmgwohHlzdbImJ0*4LTM8!/b/dKYAAAAAAAAA&bo=7gLoAwAAAAAFACQ!&rf=viewer_4',
        'http://b165.photo.store.qq.com/psb?/V120IvEC4cu4h6/r*bO.onkfqR123IebanRO06tywrBeiariIAG6uzB8aQ!/b/dKUAAAAAAAAA&bo=7gLqAwAAAAAFACY!&rf=viewer_4',
        'http://b163.photo.store.qq.com/psb?/V120IvEC4cu4h6/oE7kmK.8E8ybI*Ppwzqgb4mNJhjw*eSsahz1tdn8IOc!/b/dKMAAAAAAAAA&bo=7gLqAwAAAAAFACY!&rf=viewer_4',
        'http://b164.photo.store.qq.com/psb?/V120IvEC4cu4h6/iPkyPAQmUXjsZd6i7.SeppJM.JJ8Qh2GLjVLvqlJKwY!/b/dKQAAAAAAAAA&bo=7gLoAwAAAAAFACQ!&rf=viewer_4',
        'http://b167.photo.store.qq.com/psb?/V120IvEC4cu4h6/J.omAjOSnVmVyFN*tV18nfhsd11TdUkWCDlnt80msGc!/b/dKcAAAAAAAAA&bo=7gLoAwAAAAAFACQ!&rf=viewer_4',
        'http://b167.photo.store.qq.com/psb?/V120IvEC4cu4h6/g5iQP3MTRqOkeqvVLwEOViKYZKwZiLSoOtrMBSJxL*Y!/b/dKcAAAAAAAAA&bo=7gLqAwAAAAAFACY!&rf=viewer_4',
        'http://b282.photo.store.qq.com/psb?/V120IvEC4cu4h6/SBwQzgTd4Lv2CETX0moL7mxziwFB1gtpbl82dS62PIc!/b/dBoBAAAAAAAA&bo=7gLqAwAAAAAFACY!&rf=viewer_4',
        'http://b168.photo.store.qq.com/psb?/V120IvEC4cu4h6/kWiHt7gDpH*KSUzpm36W65ryClWfRTiqu2HYxaoDV6U!/b/dKgAAAAAAAAA&bo=7gLqAwAAAAAFACY!&rf=viewer_4',
        'http://b161.photo.store.qq.com/psb?/V120IvEC4cu4h6/qJ6keUZfaV4XC*qBZ0PLYWdwIXyJm5Aed72W31Ocz98!/b/dKEAAAAAAAAA&bo=7gLoAwAAAAAFACQ!&rf=viewer_4',
        'http://b164.photo.store.qq.com/psb?/V120IvEC4cu4h6/AL2WZLC2SjZKbUkdUKBTFKWLEtfq.WSQjYZXcvvDhpw!/b/dKQAAAAAAAAA&bo=7gLqAwAAAAAFACY!&rf=viewer_4',
        'http://b251.photo.store.qq.com/psb?/V120IvEC4cu4h6/lAzgZWgWTHa48GuK2bOqDWMd7hyByAu6qvV3d7j*rfE!/b/dPsAAAAAAAAA&bo=7gLqAwAAAAAFACY!&rf=viewer_4',
        'http://b161.photo.store.qq.com/psb?/V120IvEC4cu4h6/Te6K76Xqm.8*kstBhjBAsFLe9xg*TsJQnBtU3YbwFKA!/b/dKEAAAAAAAAA&bo=7gLqAwAAAAAFACY!&rf=viewer_4'
    ];


    var results = [];
    for(var i = 0 ; i < imageArr.length; i++){
        var obj = {
            _id: Date.now()+'',
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
            throw 'do getPhoto failed'
        }
    });
}
