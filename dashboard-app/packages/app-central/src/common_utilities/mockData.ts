const delay = (timeout: number) => new Promise((resolve) => setTimeout(resolve, timeout));

export function mockFetchData(data: any, timeout: number): Promise<any> {
    return delay(timeout).then(() => {
        return data;
    });
}
