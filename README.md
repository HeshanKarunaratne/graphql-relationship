
#### Validate GraphQL schema using `amplify api gql-compile`

### Schema
~~~graphql
type Department @model @auth(rules: [{ allow: public }]){
  id: ID!
  name: String
  manager: Employee @hasOne
  employees: [Employee] @hasMany
}

type Employee @model @auth(rules: [{ allow: public }]){
  id: ID!
  name: String
  age: Int
  department: Department @belongsTo
  projects: [EmployeeProjects] @hasMany
}

type EmployeeProjects @model @auth(rules: [{ allow: public }]){
  id: ID!
  employee: Employee @belongsTo
  project: Project @belongsTo
}

type Project @model @auth(rules: [{ allow: public }]){
  id: ID!
  name: String
  employees: [EmployeeProjects] @hasMany
}
~~~

### Mutations
~~~text
mutation CreateDepartment{
  createDepartment(input:{
    name: "Engineering"
  }){
    id
    name
  }
}

mutation CreateEmployee{
  createEmployee(input:{
    name: "Heshan Karunaratne"
    age: 29
  }){
    id
    name
  }
}

mutation UpdateManager {
  updateDepartment(input:{
    id:"7ebfc243-6502-47a3-9ff7-495f7f5ced09"
    departmentManagerId:"d94ac7b8-81bb-44be-a841-865fd66ace3d"
  }){
    name
  }
}

mutation UpdateEmployee{
  updateEmployee(input:{
    id:"d94ac7b8-81bb-44be-a841-865fd66ace3d"
    employeeDepartmentId:"7ebfc243-6502-47a3-9ff7-495f7f5ced09"
  }){
    name
  }
}

query GetDepartment {
  getDepartment(id: "7ebfc243-6502-47a3-9ff7-495f7f5ced09"){
    name
    manager {
      name
      id
    }
    departmentManagerId 
  
  }
}

query GetEmployee{
  getEmployee(id : "9ec43d58-e918-48e7-ac9c-1654234cd233"){
    name
    age
    employeeDepartmentId
    projects{
      items{
        project{
          name
        }
      }
    }
  }
}

mutation CreateProject{
  createProject(input:{
    name: "Project Y"
  }){
    name
    id
  }
}

mutation AddEmployeeToProject{
  createEmployeeProjects(input:{
    employeeProjectsId: "9ec43d58-e918-48e7-ac9c-1654234cd233"
    projectEmployeesId: "11a9ca6a-a7ae-4e3f-a2ac-1096b6f67469"
  }){
    id
  }
}

query GetProject{
  getProject(id: "645d97f2-8db6-4a48-97e5-0c7d4ed415f6"){
    name
    employees{
      items{
        employee {
          name
          age
        }
      }
    }
  }
}
~~~

### Id Mapping

~~~txt
7ebfc243-6502-47a3-9ff7-495f7f5ced09:Engineering 

d94ac7b8-81bb-44be-a841-865fd66ace3d:John Doe
0bfae8c2-bbb4-490d-b25d-6cb079b9c372:Jane Doe
9ec43d58-e918-48e7-ac9c-1654234cd233:Heshan Karunaratne

645d97f2-8db6-4a48-97e5-0c7d4ed415f6:Project X
11a9ca6a-a7ae-4e3f-a2ac-1096b6f67469:Project Y
~~~