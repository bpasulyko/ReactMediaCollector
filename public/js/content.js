export default function Test(params) {
    return {
        get() {
            return params.text;
        },
    }
}
