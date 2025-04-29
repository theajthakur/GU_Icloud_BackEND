# 📚 Student Login API

This is a simple backend API that provides a login endpoint for students. Upon successful authentication, it returns a login cookie for session management.

## 🔗 API Endpoint

### `POST /login`

Authenticates a student using their credentials.

#### 📥 Request Body

Send a JSON object with the following parameters:

```json
{
  "studentId": "your_student_id",
  "studentPass": "your_password"
}
```
