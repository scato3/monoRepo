"use client";

import type { ChangeEvent } from "react";

import { useCallback, useState } from "react";

type FieldChangeEtcType = {
  target: { name: string; value: string | number | Array<unknown> | File };
};

type FieldChangeType =
  | ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  | FieldChangeEtcType;

type ReturnFieldValuesType<T> = {
  fieldValues: T;
  handleChangeField: (event: FieldChangeType) => void;
  init: (values: T) => void;
  clear: () => void;
};

/**
 * 입력 필드의 값들을 관리하는 커스텀 훅입니다.
 *
 * 이 훅은 입력 필드의 상태를 관리하며, 필드 값 변경, 초기화, 클리어 함수를 제공합니다.
 *
 * @template T - 필드 값의 타입입니다.
 * @param {T} initial - 필드 값의 초기 상태입니다.
 *
 * @returns {[T, Function, Function, Function]} 필드 값 상태, 필드 값 변경 함수, 필드 값 초기화 함수, 필드 값 클리어 함수를 포함하는 배열을 반환합니다.
 *
 * @example
 * const [fieldValues, handleChangeField, init, clear] = useFieldValues<{ name: string, age: number }>({ name: '', age: 0 });
 *
 * // 필드 값 변경
 * handleChangeField(event);
 *
 * // 필드 값 초기화
 * clear();
 *
 * // 필드 값 설정
 * init({ name: 'John', age: 30 });
 */
function useFieldValues<T>(initial: T): ReturnFieldValuesType<T> {
  const [fieldValues, setFieldValues] = useState<T>(initial);

  const handleChangeField = useCallback((event: FieldChangeType) => {
    const {
      target: { name, value },
    } = event;

    setFieldValues((previous: T) => ({
      ...previous,
      [name]: value,
    }));
  }, []);

  const clear = useCallback(() => {
    setFieldValues(initial);
  }, []);

  const init = useCallback((values: T) => {
    setFieldValues(values);
  }, []);

  return { fieldValues, handleChangeField, init, clear };
}

export default useFieldValues;
