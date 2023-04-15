
class TgClient {
    constructor(data) {
        this.chatId = 0;
        this.clientName = "";
        this.clientId = "";
        this.clientEmail = "";
        this.clientUid = "";
        this.language = "";
        this.enabled = false;
        if (data == null) {
            return;
        }
        ObjectUtil.cloneProps(this, data);
    }

}

class TgClientMsg {
    constructor(data) {
        this.id = 0
        this.chatId = 0;
        this.type = "";
        this.msg = "";
        this.clientName = "";
        if (data == null) {
            return;
        }
        ObjectUtil.cloneProps(this, data);
    }

}