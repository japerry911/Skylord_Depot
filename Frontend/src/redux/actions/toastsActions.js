export const handleClick = () => {
    return {
        type: 'HANDLE_CLICK'
    };
};

export const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;

    return {
        type: 'HANDLE_CLOSE'
    };
};