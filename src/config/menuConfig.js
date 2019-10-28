const menuList = [{
    'title': "首页",
    'key': '/index'
}, {
    'title': "机器人设置",
    'key': '/setting',
    'children': [{
        'title': "开启",
        'key': '/setting/start',
    }]
}, {
    'title': "权限管理",
    'key': '/perMissionManagemen',
    'children': [{
            'title': "角色管理",
            'key': '/perMissionManagemen/roleManagement',
        },
        {
            'title': "账号管理",
            'key': '/perMissionManagemen/accountManagement',
        }
    ]
}];

export default menuList;