import axios from "axios";

export const apiCall = async (config: any): Promise<any> => {
  try {
    const response: any = await axios({
      ...config,
      validationStatus: () => true,
    });

    return response.data;
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};
