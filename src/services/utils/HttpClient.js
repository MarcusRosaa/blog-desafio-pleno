import delay from '../../utils/delay';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    const response = await fetch(`${this.baseURL}${path}`);
    await delay(500);
    return response.json();
  }

  async post(path, newPost) {
    const request = await fetch(
      `${this.baseURL}${path}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      },
    );
    await delay(500);
    return request.json();
  }

  async put(path, newPost) {
    const response = await fetch(
      `${this.baseURL}${path}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      },
    );
    await delay(500);
    return response.json();
  }

  async delete(path) {
    await fetch(
      `${this.baseURL}${path}`,
      {
        method: 'DELETE',
      },
    );
    await delay(500);
  }
}

export default HttpClient;
