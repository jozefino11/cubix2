import { Formik, Form, Field, ErrorMessage } from "formik";

function validateUserName(value) {
  if (!value) {
    return "requeired";
  }

  if (value.length < 3 || value.length > 20) {
    return "Túl sok vagy túl kevés karakter!";
  }

  if (value.match(/[`$*'"+!%/=?`]/)) {
    return "speciális karaktert nem írhatsz bele";
  }
}

function validateEmail(value) {
  if (!value.includes("@")) {
    return "Nem jó formula";
  }
}

function validatePassword(value) {
  if (value.length < 8) {
    return "Legalább nyolc karakter legyen!";
  }

  if (value === value.toLowerCase() || value === value.toUpperCase()) {
    return "A jelszónak tartalmaznia kell kis-és nagybetűt is!";
  }
}

export default function Screen() {
  return (
    <>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
            <div class="mb-3">
          <ErrorMessage name="username" />
          <br></br>
          <label for="username" class="form-label">
            Username
          </label>
          <Field
            name="username"
            type="text"
            class="form-control"
            id="username"
            validate={validateUserName}
          />
          </div>
          <div class="mb-3">
          <ErrorMessage name="email" />
          <br></br>
          <label for="email" class="form-label">
            Email
          </label>
          <Field
            name="email"
            type="email"
            class="form-control"
            id="email"
            validate={validateEmail}
          />
          </div>
          <div class="mb-3">
          <ErrorMessage name="password" />
          <br></br>
          <label for="password" class="form-label">
            Password
          </label>
          <Field
            name="password"
            type="password"
            class="form-control"
            id="password"
            validate={validatePassword}
          />
          </div>
          <button type="submit" class="btn btn-primary">
            Send
          </button>
        </Form>
      </Formik>
    </>
  );
}

