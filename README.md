<img src="https://graphql.org/img/logo.svg" width="180"/>


# GraphQL

In this GraphQL project, I will demonstrate how to work with basic queries and mutation in GraphQL using Fake data.

## What is GraphQL

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. 

GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.





## Installation

1 Install express 

```bash
  npm install express

```

2 Install dotenv

```bash
  npm install dotenv

```

3 Install nodemon

```bash
  npm install nodemon

```

4 Install apollo apollo

```bash
  npm install @apollo/apollo graphql

```
    
## Documentation

[GraphQl](https://www.apollographql.com/docs/)


[GraphQl Server](https://www.apollographql.com/docs/apollo-server/getting-started)


## Demo

1 get all user query

```bash
  query GetUsers {
  getUsers {
    id
    name
    email
    website
    address {
      id,
      city,
    }
  }
}

```

2 get user by id

```bash
  query GetUser($getUserId: Int!) {
  getUser(id: $getUserId) {
    id
    name
    email
    website
    address {
      city,
      country
    }
  }
}

```

3 get all task

```bash
  query GetAllTask {
  getAllTask {
    id,
    title,
    description,
    status,
    createdBy {
      id,
      name,
      email
    }
  }
}

```


4 create new task 

```bash
  mutation CreateTask($input: CreateTask) {
  createTask(input: $input) {
    id,
      title,
      description,
      timeLine,
      createdBy {
        id,
        email,
        name
      },
  }
}

```


5 update task 

```bash
 mutation UpdateTaskStatus($updateTaskStatusInput2: ChangeTaskStatus) {
  updateTaskStatus(input: $updateTaskStatusInput2) {
    id,
    title,
    description,
    status
  }
}

```


6 remove task 

```bash
 mutation RemoveTask($removeTaskId: Int!) {
  removeTask(id: $removeTaskId) {
    id,
    title,
    description,
    status,
  }
}

```

7 run localhost apollo server 

```bash
 http://localhost:8000/graphql

```
