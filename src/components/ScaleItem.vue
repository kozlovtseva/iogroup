<template>
    <div>
        <div v-bind:class="arrow">
            <div v-if="checked !== value" class="arrow" @click="click"></div>
            <div class="arrow" v-else>
                ▼
            </div>
        </div>
        <div class="mark">
            <div v-if="mark == 'big'">
                <div class="mark_big" />
            </div>
            <div v-else-if="mark == 'big_last'">
                <div class="mark_big_last" />
            </div>
            <div v-else>
                <div class="mark_small" />
            </div>
        </div>

        <div class="scale_label">{{ label }}</div>
    </div>
</template>

<script>
export default {
    props: ["checked", "value", "mark", "label"],
    model: {
        prop: "checked"
    },
    computed: {
        arrow: function() {
            return this.mark == "big_last" ? "arrow_right" : "arrow_left";
        }
    },
    methods: {
        click() {
            this.$emit("input", this.value);
        }
    }
};
</script>

<style lang="scss" scoped>
$primary-color: #610c5d;
.arrow {
    color: $primary-color;
    cursor: pointer;
    height: 15px;
    margin-top: -15px;
    margin-right: -6px;
    width: 15px;
    &_right {
        padding-left: 100px;
    }
    &_left {
        margin-left: -7px;
    }
}
.mark {
    &_big {
        border-left: 1px solid $primary-color;
        height: 20px;
    }
    &_big_last {
        border-right: 1px solid $primary-color;
        height: 20px;
    }
    &_small {
        border-left: 1px solid $primary-color;
        height: 10px;
        margin-bottom: 10px;
    }
}
.scale_label {
    color: #150101;
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-weight: bold;
}
</style>
