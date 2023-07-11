export const Input = ({ register, errors, id, labelText, type, rules }) => {
  return (
    <div className='mb-3'>
      <label htmlFor={id} className='form-label'>
        {labelText}
      </label>
      <input
        id={id}
        type={type}
        {...register(id, rules)}
        className={`form-control ${errors[id] && 'is-invalid'}`}
      />
      {errors[id] && (
        <div className='invalid-feedback'>{errors?.[id]?.message}</div>
      )}
    </div>
  )
}
export const Select = ({ register, errors, id, labelText, rules }) => {
  return (
    <div className='col-6'>
      <label htmlFor={id} className='form-label'>
        {labelText}
      </label>
      <select id={id} className='form-select' {...register(id, rules)} value=''>
        <option value='' disabled>
          請選擇{labelText}
        </option>
      </select>
    </div>
  )
}

export const Radio = ({ register, errors, id, antiId, name, rules }) => {
  return (
    <>
      <div className='form-check'>
        <input
          className={`form-check-input ${errors[id] && 'is-invalid'}`}
          type='radio'
          name={name}
          id={id}
          value='true'
          {...register(id, rules)}
        />
        <label className='form-check-label' htmlFor={id}>
          是
        </label>
      </div>
      <div className='form-check'>
        <input
          className={`form-check-input ${errors[id] && 'is-invalid'}`}
          type='radio'
          name={name}
          id={antiId}
          value='false'
          {...register(id, rules)}
        />
        <label className='form-check-label' htmlFor={antiId}>
          否
        </label>
        <div className='invalid-feedback'>{errors?.[id]?.message}</div>
      </div>
    </>
  )
}
export const TextArea = ({ register, id, defaultValue }) => {
  return (
    <>
      <label htmlFor={id}>註解</label>
      <textarea
        id={id}
        {...register(id)}
        rows='5'
        className='form-control'
        defaultValue={defaultValue}
      />
    </>
  )
}
export const CheckBox = ({
  register,
  id,
  labelText,
  rules,
  name,
  value,
  errors
}) => {
  return (
    <>
      <div className='form-check'>
        <input
          className={`form-check-input ${errors[name] && 'is-invalid'}`}
          type='checkbox'
          name={name}
          id={id}
          value={value}
          {...register(name, rules)}
        />
        <label className='form-check-label' htmlFor={id}>
          {labelText}
        </label>
        <div className='invalid-feedback'>{errors?.[id]?.message}</div>
      </div>
    </>
  )
}
