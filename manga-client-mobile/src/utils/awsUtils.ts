const getResourceNameFromAWSUrl = (url: string) => {
    const splittedUrl = url.split("/");

    return encodeURI(splittedUrl.slice(3).join("/"));
};

export { getResourceNameFromAWSUrl };