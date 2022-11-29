class ApiError extends Error {
    constructor(status, message) {
        super();
        this.message = message;
        this.status = status;
    }

    static BAD_REQUEST(message) {
        return new ApiError(404, message);
    }

    static INTERNAL(message) {
        return new ApiError(500, message);
    }

    static FORBIDDEN(message) {
        return new ApiError(403, message);
    }
}

module.exports = ApiError;
