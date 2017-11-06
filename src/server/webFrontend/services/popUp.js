const PopUp = function () {
    this.visible = false
    this.data = {}

    this.setData = data => {
        this.data = data
    }

    this.setVisibility = visible => {
        this.visible = visible
    }
}

PopUp.$inject = []

module.exports = PopUp
