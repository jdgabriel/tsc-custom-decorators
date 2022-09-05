## Learning Typescript decorators for Authenticate method

```javascript
// Route
//localhost:3535/dash/admin
http: {
  header: {
    role: "ADMIN";
  }
}

// Route
//localhost:3535/dash/creator
http: {
  header: {
    role: "ADMIN" || "CREATOR";
  }
}

// Route
//localhost:3535/dash/editor
http: {
  header: {
    role: "ADMIN" || "CREATOR" || "EDITOR";
  }
}
```
