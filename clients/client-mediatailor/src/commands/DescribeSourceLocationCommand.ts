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

import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { DescribeSourceLocationRequest, DescribeSourceLocationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeSourceLocationCommand,
  serializeAws_restJson1DescribeSourceLocationCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeSourceLocationCommandInput extends DescribeSourceLocationRequest {}
export interface DescribeSourceLocationCommandOutput extends DescribeSourceLocationResponse, __MetadataBearer {}

/**
 * <p>Retrieves the properties of the requested source location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DescribeSourceLocationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DescribeSourceLocationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new DescribeSourceLocationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSourceLocationCommandInput} for command's `input` shape.
 * @see {@link DescribeSourceLocationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 */
export class DescribeSourceLocationCommand extends $Command<
  DescribeSourceLocationCommandInput,
  DescribeSourceLocationCommandOutput,
  MediaTailorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSourceLocationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaTailorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSourceLocationCommandInput, DescribeSourceLocationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "DescribeSourceLocationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSourceLocationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSourceLocationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSourceLocationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeSourceLocationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSourceLocationCommandOutput> {
    return deserializeAws_restJson1DescribeSourceLocationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
