function classes(...names: Array<string>) {
    return names.filter(Boolean).join(' ');
}

export default classes;
