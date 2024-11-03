export const userAPI = {
  create: async (username: string, email: string, password: string) => {
    try {
      const URL = `${process.env.NEXT_PUBLIC_API_URL}/user/create`;
      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          email,
          password,
        }),
      };

      const response = await fetch(URL, options);

      const data = await response.json();
      console.log(data);

      return data;
    } catch (error) {
      console.error(error);
    }
  },
};
