# **Challenging Task** IWP
## Reg. no. : - 20BCE10584

<br>

>**Question)** In PL/SQL, create a programme that displays an appropriate message and adjusts an employee's compensation by 12% if it is higher than the median wage for their position, or brings it up to the median if it is lower.

<br>

Ans :

PL/SQL

```sql
DECLARE
  median_salary NUMBER;
  employee_salary NUMBER;
  employee_position VARCHAR2(50);
BEGIN
  SELECT position, salary INTO employee_position, employee_salary
  FROM employees
  WHERE employee_id = :employee_id; -- Replace with the actual employee ID
  
  -- Get the median salary for the employee's position
  SELECT MEDIAN(salary) INTO median_salary
  FROM employees
  WHERE position = employee_position;
  
  -- Adjust the employee's salary if necessary
  IF employee_salary > median_salary THEN
    -- Employee's salary is higher than the median
    employee_salary := employee_salary * 1.12;
    DBMS_OUTPUT.PUT_LINE('Employee ' || :employee_id || ' has received a 12% salary increase.');
  ELSIF employee_salary < median_salary THEN
    -- Employee's salary is lower than the median
    employee_salary := median_salary;
    DBMS_OUTPUT.PUT_LINE('Employee ' || :employee_id || ' has received a salary increase to the median for their position.');
  ELSE
    DBMS_OUTPUT.PUT_LINE('Employee ' || :employee_id || ' is already at the median salary for their position.');
  END IF;
  
  -- Update the employee's salary in the database
  UPDATE employees
  SET salary = employee_salary
  WHERE employee_id = :employee_id; -- Replace with the actual employee ID
END;
```

---
---

                            --OXO--