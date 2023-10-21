/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateDepartment: OnCreateDepartmentSubscription;
  onUpdateDepartment: OnUpdateDepartmentSubscription;
  onDeleteDepartment: OnDeleteDepartmentSubscription;
  onCreateEmployee: OnCreateEmployeeSubscription;
  onUpdateEmployee: OnUpdateEmployeeSubscription;
  onDeleteEmployee: OnDeleteEmployeeSubscription;
};

export type CreateDepartmentInput = {
  id?: string | null;
  name?: string | null;
  departmentManagerId?: string | null;
};

export type ModelDepartmentConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelDepartmentConditionInput | null> | null;
  or?: Array<ModelDepartmentConditionInput | null> | null;
  not?: ModelDepartmentConditionInput | null;
  departmentManagerId?: ModelIDInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type Department = {
  __typename: "Department";
  id: string;
  name?: string | null;
  manager?: Employee | null;
  createdAt: string;
  updatedAt: string;
  departmentManagerId?: string | null;
};

export type Employee = {
  __typename: "Employee";
  id: string;
  name?: string | null;
  age?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDepartmentInput = {
  id: string;
  name?: string | null;
  departmentManagerId?: string | null;
};

export type DeleteDepartmentInput = {
  id: string;
};

export type CreateEmployeeInput = {
  id?: string | null;
  name?: string | null;
  age?: number | null;
};

export type ModelEmployeeConditionInput = {
  name?: ModelStringInput | null;
  age?: ModelIntInput | null;
  and?: Array<ModelEmployeeConditionInput | null> | null;
  or?: Array<ModelEmployeeConditionInput | null> | null;
  not?: ModelEmployeeConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateEmployeeInput = {
  id: string;
  name?: string | null;
  age?: number | null;
};

export type DeleteEmployeeInput = {
  id: string;
};

export type ModelDepartmentFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelDepartmentFilterInput | null> | null;
  or?: Array<ModelDepartmentFilterInput | null> | null;
  not?: ModelDepartmentFilterInput | null;
  departmentManagerId?: ModelIDInput | null;
};

export type ModelDepartmentConnection = {
  __typename: "ModelDepartmentConnection";
  items: Array<Department | null>;
  nextToken?: string | null;
};

export type ModelEmployeeFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  age?: ModelIntInput | null;
  and?: Array<ModelEmployeeFilterInput | null> | null;
  or?: Array<ModelEmployeeFilterInput | null> | null;
  not?: ModelEmployeeFilterInput | null;
};

export type ModelEmployeeConnection = {
  __typename: "ModelEmployeeConnection";
  items: Array<Employee | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionDepartmentFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionDepartmentFilterInput | null> | null;
  or?: Array<ModelSubscriptionDepartmentFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionEmployeeFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  age?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionEmployeeFilterInput | null> | null;
  or?: Array<ModelSubscriptionEmployeeFilterInput | null> | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type CreateDepartmentMutation = {
  __typename: "Department";
  id: string;
  name?: string | null;
  manager?: {
    __typename: "Employee";
    id: string;
    name?: string | null;
    age?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  departmentManagerId?: string | null;
};

export type UpdateDepartmentMutation = {
  __typename: "Department";
  id: string;
  name?: string | null;
  manager?: {
    __typename: "Employee";
    id: string;
    name?: string | null;
    age?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  departmentManagerId?: string | null;
};

export type DeleteDepartmentMutation = {
  __typename: "Department";
  id: string;
  name?: string | null;
  manager?: {
    __typename: "Employee";
    id: string;
    name?: string | null;
    age?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  departmentManagerId?: string | null;
};

export type CreateEmployeeMutation = {
  __typename: "Employee";
  id: string;
  name?: string | null;
  age?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEmployeeMutation = {
  __typename: "Employee";
  id: string;
  name?: string | null;
  age?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteEmployeeMutation = {
  __typename: "Employee";
  id: string;
  name?: string | null;
  age?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type GetDepartmentQuery = {
  __typename: "Department";
  id: string;
  name?: string | null;
  manager?: {
    __typename: "Employee";
    id: string;
    name?: string | null;
    age?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  departmentManagerId?: string | null;
};

export type ListDepartmentsQuery = {
  __typename: "ModelDepartmentConnection";
  items: Array<{
    __typename: "Department";
    id: string;
    name?: string | null;
    createdAt: string;
    updatedAt: string;
    departmentManagerId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetEmployeeQuery = {
  __typename: "Employee";
  id: string;
  name?: string | null;
  age?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type ListEmployeesQuery = {
  __typename: "ModelEmployeeConnection";
  items: Array<{
    __typename: "Employee";
    id: string;
    name?: string | null;
    age?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateDepartmentSubscription = {
  __typename: "Department";
  id: string;
  name?: string | null;
  manager?: {
    __typename: "Employee";
    id: string;
    name?: string | null;
    age?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  departmentManagerId?: string | null;
};

export type OnUpdateDepartmentSubscription = {
  __typename: "Department";
  id: string;
  name?: string | null;
  manager?: {
    __typename: "Employee";
    id: string;
    name?: string | null;
    age?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  departmentManagerId?: string | null;
};

export type OnDeleteDepartmentSubscription = {
  __typename: "Department";
  id: string;
  name?: string | null;
  manager?: {
    __typename: "Employee";
    id: string;
    name?: string | null;
    age?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  departmentManagerId?: string | null;
};

export type OnCreateEmployeeSubscription = {
  __typename: "Employee";
  id: string;
  name?: string | null;
  age?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateEmployeeSubscription = {
  __typename: "Employee";
  id: string;
  name?: string | null;
  age?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteEmployeeSubscription = {
  __typename: "Employee";
  id: string;
  name?: string | null;
  age?: number | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateDepartment(
    input: CreateDepartmentInput,
    condition?: ModelDepartmentConditionInput
  ): Promise<CreateDepartmentMutation> {
    const statement = `mutation CreateDepartment($input: CreateDepartmentInput!, $condition: ModelDepartmentConditionInput) {
        createDepartment(input: $input, condition: $condition) {
          __typename
          id
          name
          manager {
            __typename
            id
            name
            age
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          departmentManagerId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDepartmentMutation>response.data.createDepartment;
  }
  async UpdateDepartment(
    input: UpdateDepartmentInput,
    condition?: ModelDepartmentConditionInput
  ): Promise<UpdateDepartmentMutation> {
    const statement = `mutation UpdateDepartment($input: UpdateDepartmentInput!, $condition: ModelDepartmentConditionInput) {
        updateDepartment(input: $input, condition: $condition) {
          __typename
          id
          name
          manager {
            __typename
            id
            name
            age
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          departmentManagerId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDepartmentMutation>response.data.updateDepartment;
  }
  async DeleteDepartment(
    input: DeleteDepartmentInput,
    condition?: ModelDepartmentConditionInput
  ): Promise<DeleteDepartmentMutation> {
    const statement = `mutation DeleteDepartment($input: DeleteDepartmentInput!, $condition: ModelDepartmentConditionInput) {
        deleteDepartment(input: $input, condition: $condition) {
          __typename
          id
          name
          manager {
            __typename
            id
            name
            age
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          departmentManagerId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDepartmentMutation>response.data.deleteDepartment;
  }
  async CreateEmployee(
    input: CreateEmployeeInput,
    condition?: ModelEmployeeConditionInput
  ): Promise<CreateEmployeeMutation> {
    const statement = `mutation CreateEmployee($input: CreateEmployeeInput!, $condition: ModelEmployeeConditionInput) {
        createEmployee(input: $input, condition: $condition) {
          __typename
          id
          name
          age
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEmployeeMutation>response.data.createEmployee;
  }
  async UpdateEmployee(
    input: UpdateEmployeeInput,
    condition?: ModelEmployeeConditionInput
  ): Promise<UpdateEmployeeMutation> {
    const statement = `mutation UpdateEmployee($input: UpdateEmployeeInput!, $condition: ModelEmployeeConditionInput) {
        updateEmployee(input: $input, condition: $condition) {
          __typename
          id
          name
          age
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEmployeeMutation>response.data.updateEmployee;
  }
  async DeleteEmployee(
    input: DeleteEmployeeInput,
    condition?: ModelEmployeeConditionInput
  ): Promise<DeleteEmployeeMutation> {
    const statement = `mutation DeleteEmployee($input: DeleteEmployeeInput!, $condition: ModelEmployeeConditionInput) {
        deleteEmployee(input: $input, condition: $condition) {
          __typename
          id
          name
          age
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEmployeeMutation>response.data.deleteEmployee;
  }
  async GetDepartment(id: string): Promise<GetDepartmentQuery> {
    const statement = `query GetDepartment($id: ID!) {
        getDepartment(id: $id) {
          __typename
          id
          name
          manager {
            __typename
            id
            name
            age
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          departmentManagerId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDepartmentQuery>response.data.getDepartment;
  }
  async ListDepartments(
    filter?: ModelDepartmentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDepartmentsQuery> {
    const statement = `query ListDepartments($filter: ModelDepartmentFilterInput, $limit: Int, $nextToken: String) {
        listDepartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            createdAt
            updatedAt
            departmentManagerId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDepartmentsQuery>response.data.listDepartments;
  }
  async GetEmployee(id: string): Promise<GetEmployeeQuery> {
    const statement = `query GetEmployee($id: ID!) {
        getEmployee(id: $id) {
          __typename
          id
          name
          age
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEmployeeQuery>response.data.getEmployee;
  }
  async ListEmployees(
    filter?: ModelEmployeeFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEmployeesQuery> {
    const statement = `query ListEmployees($filter: ModelEmployeeFilterInput, $limit: Int, $nextToken: String) {
        listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            age
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListEmployeesQuery>response.data.listEmployees;
  }
  OnCreateDepartmentListener(
    filter?: ModelSubscriptionDepartmentFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDepartment">>
  > {
    const statement = `subscription OnCreateDepartment($filter: ModelSubscriptionDepartmentFilterInput) {
        onCreateDepartment(filter: $filter) {
          __typename
          id
          name
          manager {
            __typename
            id
            name
            age
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          departmentManagerId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDepartment">>
    >;
  }

  OnUpdateDepartmentListener(
    filter?: ModelSubscriptionDepartmentFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDepartment">>
  > {
    const statement = `subscription OnUpdateDepartment($filter: ModelSubscriptionDepartmentFilterInput) {
        onUpdateDepartment(filter: $filter) {
          __typename
          id
          name
          manager {
            __typename
            id
            name
            age
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          departmentManagerId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDepartment">>
    >;
  }

  OnDeleteDepartmentListener(
    filter?: ModelSubscriptionDepartmentFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDepartment">>
  > {
    const statement = `subscription OnDeleteDepartment($filter: ModelSubscriptionDepartmentFilterInput) {
        onDeleteDepartment(filter: $filter) {
          __typename
          id
          name
          manager {
            __typename
            id
            name
            age
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          departmentManagerId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDepartment">>
    >;
  }

  OnCreateEmployeeListener(
    filter?: ModelSubscriptionEmployeeFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateEmployee">>
  > {
    const statement = `subscription OnCreateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
        onCreateEmployee(filter: $filter) {
          __typename
          id
          name
          age
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateEmployee">>
    >;
  }

  OnUpdateEmployeeListener(
    filter?: ModelSubscriptionEmployeeFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateEmployee">>
  > {
    const statement = `subscription OnUpdateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
        onUpdateEmployee(filter: $filter) {
          __typename
          id
          name
          age
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateEmployee">>
    >;
  }

  OnDeleteEmployeeListener(
    filter?: ModelSubscriptionEmployeeFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteEmployee">>
  > {
    const statement = `subscription OnDeleteEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
        onDeleteEmployee(filter: $filter) {
          __typename
          id
          name
          age
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteEmployee">>
    >;
  }
}
