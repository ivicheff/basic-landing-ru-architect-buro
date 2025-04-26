"use server";

import fs from "fs/promises";
import path from "path";
import { env } from "~/env.js";

// Получаем API ключ из серверных переменных окружения
const apiKey = env.FORMCARRY_API_KEY;
if (!apiKey) {
  throw new Error("FORMCARRY_API_KEY is not defined");
}

interface FormcarryResponse {
  code: number;
  message?: string;
}

interface ContentMessages {
  form: {
    success: string;
    error: string;
    formcarryError: string;
    missingApiKey: string;
  };
  newsletter: {
    success: string;
    error: string;
    formcarryError: string;
    missingApiKey: string;
  };
}

interface ContentData {
  contacts: {
    form: {
      success: string;
      error: string;
      formcarryError: string;
      missingApiKey: string;
    };
  };
  footer: {
    newsletter: {
      success: string;
      error: string;
      formcarryError: string;
      missingApiKey: string;
    };
  };
}

// Функция для загрузки текстов из JSON файла
async function getContentMessages(): Promise<ContentMessages> {
  try {
    const filePath = path.join(process.cwd(), "src", "content.ru.json");
    const fileContent = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(fileContent) as ContentData;

    return {
      form: {
        success: data.contacts.form.success,
        error: data.contacts.form.error,
        formcarryError: data.contacts.form.formcarryError,
        missingApiKey: data.contacts.form.missingApiKey,
      },
      newsletter: {
        success: data.footer.newsletter.success,
        error: data.footer.newsletter.error,
        formcarryError: data.footer.newsletter.formcarryError,
        missingApiKey: data.footer.newsletter.missingApiKey,
      },
    };
  } catch (error) {
    console.error("Ошибка при загрузке текстов:", error);
    // Возвращаем дефолтные значения в случае ошибки
    return {
      form: {
        success: "Форма успешно отправлена!",
        error: "Произошла ошибка при отправке формы",
        formcarryError: "Ошибка сервера при отправке формы",
        missingApiKey: "API ключ для отправки формы не настроен",
      },
      newsletter: {
        success: "Вы успешно подписались на рассылку!",
        error: "Произошла ошибка при отправке формы",
        formcarryError: "Ошибка сервера при подписке на рассылку",
        missingApiKey: "API ключ для подписки не настроен",
      },
    };
  }
}

export async function handleForm(data: FormData) {
  try {
    if (!apiKey) {
      const messages = await getContentMessages();
      throw new Error(messages.form.missingApiKey);
    }

    const response = await fetch(apiKey, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    const result = (await response.json()) as FormcarryResponse;
    console.log("Formcarry response:", result);

    if (result.code !== 200) {
      const messages = await getContentMessages();
      throw new Error(result.message ?? messages.form.formcarryError);
    }

    const messages = await getContentMessages();
    return { success: true, message: messages.form.success };
  } catch (error) {
    console.error("Form submission error:", error);
    const messages = await getContentMessages();
    const errorMessage =
      error instanceof Error ? error.message : messages.form.error;
    throw new Error(errorMessage);
  }
}

export async function handleNewsletterForm(data: FormData) {
  try {
    if (!apiKey) {
      const messages = await getContentMessages();
      throw new Error(messages.newsletter.missingApiKey);
    }

    const response = await fetch(apiKey, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    const result = (await response.json()) as FormcarryResponse;
    console.log("Formcarry response:", result);

    if (result.code !== 200) {
      const messages = await getContentMessages();
      throw new Error(result.message ?? messages.newsletter.formcarryError);
    }

    const messages = await getContentMessages();
    return { success: true, message: messages.newsletter.success };
  } catch (error) {
    console.error("Newsletter form submission error:", error);
    const messages = await getContentMessages();
    const errorMessage =
      error instanceof Error ? error.message : messages.newsletter.error;
    throw new Error(errorMessage);
  }
}
