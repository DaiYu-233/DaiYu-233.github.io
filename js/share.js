document.addEventListener('DOMContentLoaded', () => {
    /* 获取本页链接地址（不包含参数） */
    function getNowURL() {
        return location.protocol + '//' + location.host + location.pathname
    }

    const clipboard = new ClipboardJS('button#share-link', {
        text: function () {
            return document.title + '：' + getNowURL()
        },
    })
    clipboard.on('success', function () {
        if (GLOBAL_CONFIG.Snackbar) {
            btf.snackbarShow(GLOBAL_CONFIG.copy.success)
        } else {
            console.log("复制成功")
        }
    })
    clipboard.on('error', function () {
        if (GLOBAL_CONFIG.Snackbar) {
            btf.snackbarShow(GLOBAL_CONFIG.copy.error)
        } else {
            console.error("复制失败")
        }
    })
})

(() => {
    const task = () => {
        // 这里写要执行的代码
    }
    document.addEventListener('DOMContentLoaded', task)
    document.addEventListener('pjax:success', task)
})()
