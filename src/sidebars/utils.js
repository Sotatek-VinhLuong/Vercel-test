/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

const mustache_1 = require("mustache");

function chainSelector(versions) {
  const template = `<div class="dropdown dropdown--hoverable dropdown--right">
  <button class="button button--block button--sm button--secondary"><span>Select Chain</span></button>
  <ul class="dropdown__menu">
    {{#.}}<li><a class="dropdown__link" href="{{{baseUrl}}}">{{{label}}}</a></li>{{/.}}
  </ul>
</div>
      `;
  const view = mustache_1.render(template, versions);
  return view;
}

module.exports = { chainSelector };
