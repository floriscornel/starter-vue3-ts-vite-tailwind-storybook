<script setup lang="ts">
import { ref } from 'vue';
import FileUpload, { FileUploadSelectEvent } from 'primevue/fileupload';
import DataTable, { DataTableCellEditCompleteEvent } from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';

const props = defineProps({
    encoding: { type: String, default: 'utf-8' },
    rowSeparator: { type: String, default: "\n" },
    columnSeparator: { type: String, default: ',' },
});

const dataHeader = ref([] as string[]);
const data = ref([] as { [key: string]: string }[]);

const selectFile = (ev: Event) => {
    const reader = new FileReader();
    const event = ev as unknown as FileUploadSelectEvent;
    const file: File = (event.files as FileList)[0];
    reader.onload = function (e) {
        if (typeof e.target?.result === 'string') {
            const dataArray = e.target?.result.split(props.rowSeparator)
                .filter((line) => line.length > 0)
                .map((line) => line.split(props.columnSeparator));
            if (dataArray.length >= 2) {
                const keys = dataArray.shift() as string[];
                const merge = (values: string[]) => {
                    const merged = {} as { [key: string]: string };
                    for (let i = 0; i < values.length; i++) {
                        merged[keys[i]] = values[i];
                    }
                    return merged;
                };
                data.value = dataArray.map((values: string[]) => merge(values));
                dataHeader.value = keys;
            }
        }
    }
    reader.readAsText(file, props.encoding);
}

const onCellEditComplete = (event: DataTableCellEditCompleteEvent) => {
    const { index, newValue, field } = event;
    data.value[index][field] = newValue;
};

</script>

<template>
    <div>
        <DataTable v-if="dataHeader.length > 0" :value="data" editMode="cell" @cell-edit-complete="onCellEditComplete"
            class="editable-cells-table" responsiveLayout="scroll">
            <Column v-for="(textValue, index) in dataHeader" :key="index" :field="dataHeader[index]"
                :header="textValue">
                <template #editor="{ data, field }">
                    <InputText v-model="data[field]" autofocus />
                </template>
            </Column>
        </DataTable>
    </div>
    <div class="p-4">
        <FileUpload mode="basic" @select="selectFile" auto :customUpload="true" @uploader="() => { }" />
    </div>
</template>
