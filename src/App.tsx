// in src/App.tsx
import {
  Admin,
  Button,
  Create,
  CreateButton,
  Datagrid,
  DateField,
  ExportButton,
  List,
  ListGuesser,
  ReferenceInput,
  required,
  Resource,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
  TopToolbar,
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import IconEvent from "@mui/icons-material/Event";

const dataProvider = jsonServerProvider("http://localhost:3000");

export const PostCreateCategory = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} fullWidth />
    </SimpleForm>
  </Create>
);

export const PostCreateProduct = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} fullWidth />
      <TextInput source="description" validate={[required()]} fullWidth />
      <TextInput source="price" validate={[required()]} fullWidth />
      <ReferenceInput
        label="Category"
        source="categoryId"
        reference="category"
        validate={[required()]}
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

const ListActions = () => (
  <TopToolbar>
    <CreateButton />
    <ExportButton />
    {/* Add your custom actions */}
    <Button
      onClick={() => {
        alert("Your custom action");
      }}
      label="Show calendar"
    >
      <IconEvent />
    </Button>
  </TopToolbar>
);

export const PostListCategory = () => (
  <List actions={<ListActions />}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <DateField source="creationDate" />
      <DateField source="updatedOn" />
    </Datagrid>
  </List>
);

export const PostListProduct = () => (
  <List actions={<ListActions />}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="price" />
      <DateField source="creationDate" />
      <DateField source="updatedOn" />
    </Datagrid>
  </List>
);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="category"
      list={PostListCategory}
      create={PostCreateCategory}
    />
    <Resource
      name="product"
      list={PostListProduct}
      create={PostCreateProduct}
    />
    <Resource name="venta" list={ListGuesser} />
    <Resource name="cliente" list={ListGuesser} />
  </Admin>
);

export default App;
