let CurrentConnectionInterface = {
    currentConnection: false,
    setCurrentConnection(currentConnection) {
        this.currentConnection = currentConnection;
    },
    getCurrentConnection() {
        return this.currentConnection;
    }
};

module.exports = CurrentConnectionInterface;