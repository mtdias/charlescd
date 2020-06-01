/*
 * Copyright 2020 ZUP IT SERVICOS EM TECNOLOGIA E INOVACAO SA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import styled from 'styled-components';
import Input from 'core/components/Form/Input';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const InputPhoto = styled(Input)`
  width: 334px;
  margin-right: 10px;

  input {
    background-color: ${({ theme, resume }) =>
      resume ? 'transparent' : theme.input.title.background};
    border: none;
    border-radius: 4px;
    height: 30px;
    font-size: ${({ resume }) => (resume ? '18px' : '12px')};
    cursor: ${({ resume }) => (resume ? 'pointer' : 'auto')};
    padding: ${({ resume }) => (resume ? '0' : '0 0 0 10px')};
  }
`;

export default {
  Wrapper,
  InputPhoto
};