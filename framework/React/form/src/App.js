import { Form, withFormik, Field } from 'formik'
import "./App.css"
import * as Yup from "yup"


const App = ({
    values,
    errors,
    touched,
    isSubmitting
}) => (
    <Form>
        <div>
            {touched.email && errors.email && <p>{errors.email}</p>}
            <Field type="email" name="email" placeholder="email" />
        </div>
        <div>
            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field type="password" name="password" placeholder="Password" />
        </div>
        <label>
            <Field type="checkbox" name="newsletter" checked={values.newsletter} />
            Join our newsletter
               </label>

        <Field component="select" name="plan">
            <option value="free">Free</option>
            <option value="primium">Primium</option>
        </Field>
        <button disabled={isSubmitting} type="submit"> Submit</button>
    </Form>
)

const formikApp = withFormik({
    mapPropsToValues({ email, password, newsletter, plan }) {
        return {
            email: email || 'test edwin',
            password: password || 'edwin',
            newsletter: newsletter || true,
            plan: plan || "free"
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Email not valid').required(),
        password: Yup.string().min(9, 'Password must be 9 character or longer').required('Password is required'),
    }),
    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
        setTimeout(() => {
            if (values.email === 'edwin@test.com') {
                setErrors({ email: " that email is already taken" })
            } else {
                resetForm()
            }
            setSubmitting(false)
        }, 2000)
        console.log(this)
    }
})(App)

export default formikApp;
