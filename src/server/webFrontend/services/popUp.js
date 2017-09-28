module.exports = [
    function () {
        this.visible = false
        this.data = {}

        this.loadData = data => {
            this.data = data
        }

        this.setVisibility = visible => {
            this.visible = visible
        }
    }
]
