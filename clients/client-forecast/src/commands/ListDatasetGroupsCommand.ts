// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { ListDatasetGroupsRequest, ListDatasetGroupsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListDatasetGroupsCommand,
  serializeAws_json1_1ListDatasetGroupsCommand,
} from "../protocols/Aws_json1_1";

export interface ListDatasetGroupsCommandInput extends ListDatasetGroupsRequest {}
export interface ListDatasetGroupsCommandOutput extends ListDatasetGroupsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of dataset groups created using the <a>CreateDatasetGroup</a>
 *       operation. For each dataset group, this operation returns a summary of its properties,
 *       including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by
 *       using the dataset group ARN with the <a>DescribeDatasetGroup</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListDatasetGroupsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListDatasetGroupsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new ListDatasetGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDatasetGroupsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetGroupsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 */
export class ListDatasetGroupsCommand extends $Command<
  ListDatasetGroupsCommandInput,
  ListDatasetGroupsCommandOutput,
  ForecastClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDatasetGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDatasetGroupsCommandInput, ListDatasetGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "ListDatasetGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDatasetGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDatasetGroupsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDatasetGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDatasetGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDatasetGroupsCommandOutput> {
    return deserializeAws_json1_1ListDatasetGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
