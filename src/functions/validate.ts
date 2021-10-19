/**
 * validateForm function
 *
 * @param type
 * @param data
 * @param callback
 */
const validateForm = (
    data: unknown,
    requiredValues: string[],
    error: (key: string) => void,
    success: () => void,
) => {
    const formData = data as { [key: string]: unknown };
    for (let key in formData) {
        if (requiredValues.includes(key)) {
            if (!formData[key]) {
                return error(key);
            }
        }
    }
    success();
};

export { validateForm };
