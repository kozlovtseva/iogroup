validateName,
    validateBirthYear,
    validateTown,
    validateSkype,
    validateEmail,
    validateDate;

export const validateName = name => {
    if (!name.length) {
        return { valid: false, error: "Заполните поле" };
    }
    if (!name.match(/^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+$/)) {
        return { valid: false, error: "Введите фамилию, имя и отчество" };
    }
    return { valid: true, error: null };
};

export const validateBirthYear = year => {
    if (!year.length) {
        return { valid: false, error: "Заполните поле" };
    }
    if (!year.match(/^\d{4}$/)) {
        return { valid: false, error: "Введите год рождения (только цифры)" };
    }
    return { valid: true, error: null };
};

export const validateTown = town => {
    if (!town.length) {
        return { valid: false, error: "Заполните поле" };
    }
    return { valid: true, error: null };
};

export const validateSkype = skype => {
    if (!skype.length) {
        return { valid: false, error: "Заполните поле" };
    }
    return { valid: true, error: null };
};

export const validateEmail = email => {
    if (!email.length) {
        return { valid: false, error: "Заполните поле" };
    }
    if (!email.match(/\S+@\S+\.\S+/)) {
        return { valid: false, error: "Введите корректный адрес почты" };
    }
    return { valid: true, error: null };
};

export const validateDate = date => {
    if (!date.length) {
        return { valid: false, error: "Заполните поле" };
    }
    if (!date.match(/^(\d{1,2}).(\d{1,2}).(\d{4})$/)) {
        return { valid: false, error: "Введите дату в формате 01.01.2017" };
    }
    return { valid: true, error: null };
};
