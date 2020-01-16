<template lang="html">
    <div class="container">
        <img src="../assets/logo.png" alt="iogroup" />
        <h1>Дело</h1>

        <form @submit.prevent="checkForm" method="post">
            <div>
                <label>Полное ФИО</label>
                <input type="text" v-model="user.name" />
                <div>{{ errors.name }}</div>
            </div>
            <div>
                <label>Год рождения</label>
                <input type="number" v-model="user.year" />
                <div>{{ errors.year }}</div>
            </div>
            <div>
                <label>Место жительства</label>
                <input v-model="user.town" />
                <div>{{ errors.town }}</div>
            </div>
            <div>
                <label>Скайп</label>
                <input v-model="user.skype" />
                <div>{{ errors.skype }}</div>
            </div>
            <div>
                <label>Почта</label>
                <input type="email" v-model="user.email" />
                <div>{{ errors.email }}</div>
            </div>
            <div>
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
                <h2>Уровень владения JavaScript</h2>
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
                        mark="big"
                    />
                </div>
            </div>
            <div>
                <label>Дата заполнения</label>
                <input v-model="user.date" />
                <div>{{ errors.date }}</div>
            </div>
            <button type="submit">Отправить</button>
        </form>
    </div>
</template>

<script>
// import { validateName, validateBirthYear,  validateSkype, validateMail} from "../utils/validation";
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
            // this.errors = {};
            // const validName = validateName(this.user.name);
            // this.errors.name = validName.error;
            // if (this.valid) {
            //     this.valid = validName.valid;
            // }
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
.container {
    background-image: url("../assets/back.jpg");
    height: 100%;
    margin: 0 auto;
    width: 45vw;
}
</style>
