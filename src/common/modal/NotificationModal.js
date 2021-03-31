import { notification } from 'antd';

const success = (content) => {
    notification.success({
        message: 'Notification Title',
        description: content,
    });
};

const error = (content) => {
    notification.error({
        message: 'Notification Title',
        description: content,
    });
};

export {
    success,
    error,
};