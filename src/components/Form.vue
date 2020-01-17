<template lang="html">
    <div class="container">
        <img class="logo" src="../assets/logo.png" alt="iogroup" />
        <h1 class="title">Дело</h1>

        <form @submit.prevent="checkForm" method="post" class="form">
            <div class="form__item">
                <label class="form__label">Полное ФИО</label>
                <input
                    class="form__input"
                    v-model="user.name"
                    placeholder="Иванов Иван Иванович"
                />
            </div>
            <div class="form__error">{{ errors.name }}</div>
            <div class="form__item">
                <label class="form__label">Год рождения</label>
                <input
                    class="form__input"
                    v-model="user.year"
                    placeholder="1990"
                />
            </div>
            <div class="form__error">{{ errors.year }}</div>
            <div class="form__item">
                <label class="form__label">Место жительства</label>
                <input
                    class="form__input"
                    v-model="user.town"
                    placeholder="г. Томск"
                />
            </div>
            <div class="form__error">{{ errors.town }}</div>
            <div class="form__item">
                <label class="form__label">Скайп</label>
                <input
                    class="form__input"
                    v-model="user.skype"
                    placeholder="ivanov"
                />
            </div>
            <div class="form__error">{{ errors.skype }}</div>
            <div class="form__item">
                <label class="form__label">Почта</label>
                <input
                    class="form__input"
                    v-model="user.email"
                    placeholder="ivanov@gmail.com"
                />
            </div>
            <div class="form__error">{{ errors.email }}</div>
            <h3 class="form__subtitle">Расскажите о себе чекбоксами</h3>
            <p class="form__text">
                Отметьте чекбоксами пункты, которые соответствуют вашим
                скиллами. Отсутствие опыта не означает, что у вас меньше шансов
                стать одним из наших товарищей. Это означает, что вы будете
                получать те задачи, с которыми гарантированно будете
                справляться.
            </p>
            <div class="checkboxes">
                <CheckBoxItem
                    v-model="user.skills"
                    value="bem"
                    label="Методология БЭМ"
                />
                <CheckBoxItem
                    v-model="user.skills"
                    value="jQuery"
                    label="jQuery"
                />
                <CheckBoxItem v-model="user.skills" value="HAML" label="HAML" />
                <CheckBoxItem v-model="user.skills" value="SASS" label="SASS" />
                <CheckBoxItem v-model="user.skills" value="LESS" label="LESS" />
                <CheckBoxItem v-model="user.skills" value="Jade" label="Jade" />
                <CheckBoxItem
                    v-model="user.skills"
                    value="Stylus"
                    label="Stylus"
                />
                <CheckBoxItem
                    v-model="user.skills"
                    value="Angular"
                    label="Angular"
                />
                <CheckBoxItem
                    v-model="user.skills"
                    value="slicing"
                    label="Верстка рассылок"
                />
                <CheckBoxItem
                    v-model="user.skills"
                    value="responsive"
                    label="Адаптивная верстка"
                />
            </div>
            <div>
                <h3 class="form__subtitle">Уровень владения JavaScript</h3>
                <div class="scale__container">
                    <ScaleItem
                        v-model="user.scale"
                        value="0"
                        label="Не владею"
                        mark="big"
                    />
                    <ScaleItem
                        v-model="user.scale"
                        value="1"
                        label="Использую готовые решения"
                        mark="small"
                    />
                    <ScaleItem
                        v-model="user.scale"
                        value="2"
                        label="Использую готовые решения и уменю их переделывать"
                        mark="small"
                    />
                    <ScaleItem
                        v-model="user.scale"
                        value="3"
                        label="Пишу сложный JS с нуля"
                        mark="big_last"
                    />
                </div>
            </div>
            <div class="form__item">
                <label class="form__label">Дата заполнения</label>
                <input
                    class="form__input form__input_date"
                    v-model="user.date"
                    placeholder="01.01.2017"
                />
            </div>
            <div class="form__error">{{ errors.date }}</div>
            <button class="form__button" type="submit">Отправить</button>
        </form>
    </div>
</template>

<script>
import {
    validateName,
    validateBirthYear,
    validateTown,
    validateSkype,
    validateEmail,
    validateDate
} from "../utils/validation";
import CheckBoxItem from "./CheckBoxItem";
import ScaleItem from "./ScaleItem";

export default {
    name: "Form",
    components: {
        CheckBoxItem,
        ScaleItem
    },
    data() {
        return {
            user: {
                name: "",
                year: "",
                town: "",
                skype: "",
                email: "",
                skills: [],
                scale: "1",
                date: ""
            },
            valid: true,
            errors: {}
        };
    },
    methods: {
        checkForm() {
            this.errors = {};
            const validName = validateName(this.user.name);
            this.errors.name = validName.error;
            this.valid = validName.valid;

            const validYear = validateBirthYear(this.user.year);
            this.errors.year = validYear.error;
            this.valid = validYear.valid;

            const validTown = validateTown(this.user.town);
            this.errors.town = validTown.error;
            this.valid = validTown.valid;

            const validSkype = validateSkype(this.user.skype);
            this.errors.skype = validSkype.error;
            this.valid = validSkype.valid;

            const validEmail = validateEmail(this.user.email);
            this.errors.email = validEmail.error;
            this.valid = validEmail.valid;

            const validDate = validateDate(this.user.date);
            this.errors.date = validDate.error;
            this.valid = validDate.valid;
            if (this.valid) {
                alert(
                    "Анкета успешно заполнена\n\n" + JSON.stringify(this.user)
                );
            }
        }
    }
};
</script>

<style lang="scss" scoped>
$base-color: #400749;
$primary-color: #610c5d;
@import url("https://fonts.googleapis.com/css?family=PT+Sans+Caption:700|Roboto|Roboto+Slab:100&display=swap");
.container {
    background-image: url("../assets/back.jpg");
    height: 100%;
    margin: 0 auto;
    padding: 30px 60px;
    text-align: left;
    width: 45vw;
}
.logo {
    width: 60px;
}
.title {
    color: $base-color;
    font-family: "PT Sans Caption", sans-serif;
    font-size: 42px;
    margin: 10px 0;
    text-align: center;
    text-transform: uppercase;
}
.checkboxes {
    display: flex;
    flex-wrap: wrap;
}
.form {
    &__item {
        display: flex;
    }
    &__label {
        align-items: flex-end;
        color: #150101;
        display: flex;
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        font-weight: bold;
        margin-right: 10px;
        white-space: nowrap;
    }
    &__input {
        background-color: transparent;
        border: none;
        border-bottom: 2px solid $primary-color;
        color: #1a1919;
        font-family: "Roboto Slab", serif;
        font-size: 20px;
        padding-left: 5px;
        width: 100%;
        &_date {
            width: 30%;
        }
    }
    &__error {
        color: #7d1830;
        font-family: "Roboto", sans-serif;
        font-size: 10px;
        margin-bottom: 5px;
        text-align: center;
    }
    &__subtitle {
        color: #150101;
        font-family: "Roboto", sans-serif;
        font-size: 17px;
        margin-top: 20px;
    }
    &__text {
        color: #525252;
        font-family: "Roboto", sans-serif;
        font-size: 10px;
        margin-bottom: 15px;
    }
    &__button {
        background: transparent;
        border: 1px solid $primary-color;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        color: #150101;
        cursor: pointer;
        float: right;
        font-family: "Roboto", sans-serif;
        font-size: 14px;
        font-weight: bold;
        height: 30px;
        line-height: 25px;
        text-align: center;
        width: 150px;
        &:hover {
            background-color: $primary-color;
        }
    }
}
.scale__container {
    color: $base-color;
    display: flex;
    border-top: 1px solid $primary-color;
    margin: 20px 0;
}
</style>
